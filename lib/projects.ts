import fs from 'fs';
import path from 'path';
import type { CMSProject } from './project-types';

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects');

function parseFrontmatter(fileContent: string): { data: Record<string, unknown>; body: string } {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, body: fileContent.trim() };
  }

  const rawFrontmatter = match[1];
  const body = match[2].trim();
  const data: Record<string, unknown> = {};

  const lines = rawFrontmatter.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) {
      i++;
      continue;
    }

    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();

    if (value === '') {
      const items: string[] = [];
      i++;
      while (i < lines.length && lines[i].trim().startsWith('-')) {
        const item = lines[i].trim().replace(/^-\s*/, '').replace(/^["']|["']$/g, '');
        items.push(item);
        i++;
      }
      data[key] = items;
    } else {
      data[key] = value.replace(/^["']|["']$/g, '');
      i++;
    }
  }

  return { data, body };
}

function loadProject(filePath: string, slug: string): CMSProject | null {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, body } = parseFrontmatter(fileContent);

    return {
      slug: (data.slug as string) || slug,
      title: (data.title as string) || '',
      projectType: (data.projectType as string) || 'Residential',
      location: (data.location as string) || '',
      state: (data.state as string) || '',
      budget: (data.budget as string) || '',
      status: (data.status as string) || 'Completed',
      featured: Boolean(data.featured),
      completionYear: (data.completionYear as string) || '',
      coverImage: (data.coverImage as string) || '',
      galleryImages: (data.galleryImages as string[]) || [],
      keyFeatures: (data.keyFeatures as string[]) || [],
      shortDescription: (data.shortDescription as string) || body.slice(0, 120),
      description: body,
    };
  } catch {
    return null;
  }
}

export function getAllProjects(): CMSProject[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.md'));
  } catch {
    return [];
  }

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      return loadProject(path.join(PROJECTS_DIR, file), slug);
    })
    .filter((p): p is CMSProject => p !== null);
}

export function getFeaturedProjects(): CMSProject[] {
  const featured = getAllProjects().filter((p) => p.featured);
  return featured.length > 0 ? featured : getAllProjects();
}
