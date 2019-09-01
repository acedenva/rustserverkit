;(async ()=>{
	const rkit = new (require('./rustserverkit.js'))
	const defaultserver = new rkit.Server('/home/steam/rust/defaultserver')
//	defaultserver.update()
	await defaultserver.updateOxide()
	await defaultserver.updatePlugin(['ServerInfo', 'GrTeleport'])

	const myWorld = new defaultserver.World('myWorld')
	myWorld.setPerm()
	myWorld.setConfig()
	myWorld.start()
})()
//defaultserver.syncPluginConfig()



