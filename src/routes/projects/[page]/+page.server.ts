import type {PageServerLoad} from './$types'
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';

export const load : PageServerLoad = async ({params,fetch}) =>
{
  const pageName = params.page;
  const filePath = `/md/${pageName}.md`
  const fileResponse = await fetch(filePath)

  if (!fileResponse)
  {
    error(404, `project ${pageName} doesn't exist.`)
  }

  try
  {
    let markdown = await fileResponse.text()
    const compiled = await compile(markdown)

    return {html: compiled?.code}
  }
  catch(e)
  {
    error(404, "error reading markdown")
  }

}
