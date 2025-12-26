import type {PageServerLoad} from './$types'
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';
import fs from 'fs';
import { readFile } from 'fs/promises';

export const load : PageServerLoad = async ({params}) =>
{
  const pageName = params.page;
  const filePath = `src/lib/md/${pageName}.md`
  const fileExists = fs.existsSync(filePath)

  if (!fileExists)
  {
    error(404, `project ${pageName} doesn't exist.`)
  }

  try
  {
    let markdown = await readFile(filePath, 'utf8')
    const compiled = await compile(markdown)

    return {html: compiled?.code}
  }
  catch(e)
  {
    error(404, "error reading markdown")
  }

}
