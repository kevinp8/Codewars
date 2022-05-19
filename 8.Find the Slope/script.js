function slope(points)
{
  const rise = (points[3]-points[1])
  const run = (points[2]-points[0])
  return run === 0 ? 'undefined' : (rise/run).toString()
}
