function header() {
	const devToolBtn = document.querySelector('.dev-tool-nav-item')
	let devToolCounter = 0
	devToolBtn.addEventListener('click',()=>{
		document.querySelector('.submenu').style.display = devToolCounter % 2 === 0 ? 'flex' : 'none'
		if (devToolCounter % 2 === 0) {
			document.querySelector('.dev-tool-nav-item').classList.add('active')
		}else {
			document.querySelector('.dev-tool-nav-item').classList.remove('active')
		}
		devToolCounter++
	})
	const appcodeTitleHV = document.querySelector('.appcode')
	appcodeTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_appcode').style.display = 'flex'
	})
	appcodeTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_appcode').style.display = 'none'
	})
	const aquaTitleHV = document.querySelector('.aqua')
	aquaTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_aqua').style.display = 'flex'
	})
	aquaTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_aqua').style.display = 'none'
	})
	const clionTitleHV = document.querySelector('.clion')
	clionTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_clion').style.display = 'flex'
	})
	clionTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_clion').style.display = 'none'
	})
	const dataGridTitleHV = document.querySelector('.data-grid')
	dataGridTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_data-grid').style.display = 'flex'
	})
	dataGridTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_data-grid').style.display = 'none'
	})
	const dataSpellTitleHV = document.querySelector('.data-spell')
	dataSpellTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_data-spell').style.display = 'flex'
	})
	dataSpellTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_data-spell').style.display = 'none'
	})
	const fleetTitleHV = document.querySelector('.fleet-hv-t')
	fleetTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_fleet').style.display = 'flex'
	})
	fleetTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_fleet').style.display = 'none'
	})
	const goLandTitleHV = document.querySelector('.go-land')
	goLandTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_go-land').style.display = 'flex'
	})
	goLandTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_go-land').style.display = 'none'
	})
	const ideaTitleHV = document.querySelector('.idea')
	ideaTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_idea').style.display = 'flex'
	})
	ideaTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_idea').style.display = 'none'
	})
	const phpTitleHV = document.querySelector('.php')
	phpTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_phpstorm').style.display = 'flex'
	})
	phpTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_phpstorm').style.display = 'none'
	})
	const pyTitleHV = document.querySelector('.py')
	pyTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_pycharm').style.display = 'flex'
	})
	pyTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_pycharm').style.display = 'none'
	})
	const riderTitleHV = document.querySelector('.rider')
	riderTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_rider').style.display = 'flex'
	})
	riderTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_rider').style.display = 'none'
	})
	const rbTitleHV = document.querySelector('.rb')
	rbTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_ruby').style.display = 'flex'
	})
	rbTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_ruby').style.display = 'none'
	})
	const webTitleHV = document.querySelector('.web')
	webTitleHV.addEventListener('mousemove',()=>{
		document.querySelector('.product_webstorm').style.display = 'flex'
	})
	webTitleHV.addEventListener('mouseout',()=>{
		document.querySelector('.product_webstorm').style.display = 'none'
	})

}
header()

