const cli = require('next/dist/cli/next-start')


process.env.HOSTNAME = process.env.HOSTNAME || 'localhost'
process.env.PORT = process.env.PORT || '3000'
process.env.DB_NAME = 'kartevonmorgen.development.sqlite'
process.env.NEXT_PUBLIC_SELF_API = `https://co-map.ru/api/v0`


cli.nextStart(
  [
    '--port', process.env.PORT,
    '--hostname', process.env.HOSTNAME,
  ],
)
