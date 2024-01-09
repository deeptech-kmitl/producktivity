/**
 * Get the `base` path for this fragment from the `Request`.
 *
 * This path is used to tell the container of this fragment how to proxy requests for
 * assets that are hosted by this fragment.
 */
export function getBase(request: Request): string {
  const url = new URL(request.url);
  return url.searchParams.get('base') ?? '/';
}
