import { startRelayServer } from '../src/extension/extension-context-factory.js'

async function main() {
  const server = await startRelayServer({ port: 9988 })

  console.log('Server running. Press Ctrl+C to stop.')

  process.on('SIGINT', () => {
    console.log('\nShutting down...')
    server.close()
    process.exit(0)
  })
}

main().catch(console.error)
