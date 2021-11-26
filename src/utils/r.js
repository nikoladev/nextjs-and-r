import path from 'path'
import R from 'r-integration'

export function square (num) {
  const parsedNumber = Number(num)
  if (isNaN(parsedNumber)) {
    return 'Error. Use a number, please'
  }

  return R.callMethod(
    path.join(process.cwd(), 'r-scripts', 'test-method.R'),
    'square',
    [ parsedNumber ],
  )
}
