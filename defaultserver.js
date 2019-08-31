const rkit = new (require('./rustserverkit.js'))
const defaultserver = new rkit.Server('/home/steam/rust/defaultserver')
defaultserver.update()
defaultserver.updateOxide()
defaultserver.updatePlugin(['ServerInfo'])
defaultserver.syncPluginConfig()
const myWorld = new defaultserver.World('myWorld')
myWorld.setPerm()
myWorld.setConfig()
myWorld.start()
