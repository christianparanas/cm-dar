import { Rotate as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react' 


export default function Nav() {
	const [isOpen, setOpen] = useState(false)
	const [openOverlay, setOpenOverlay] = useState('nav_overlay')
	const [open_click, setOpen_click] = useState('clickout_overlay')

	useEffect(() => {
		if(isOpen) {
			setOpenOverlay('nav_overlay open_nav_overlay')
			setOpen_click('clickout_overlay open_click_out')
		} else {
			setOpenOverlay('nav_overlay')
			setOpen_click('clickout_overlay')
		}

	}, [isOpen])

	const closeNavOverlay = () => {
		setOpenOverlay('nav_overlay')
		setOpen_click('clickout_overlay')
		setOpen(false)
	}

	return (
		<div className="nav">
			<div className="upper_nav">
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</div>
			<div onClick={closeNavOverlay} className={open_click}></div>
			<div className={openOverlay}>
				<div>Home</div>
				<div>Activity 2</div>
				<div>Activity 3</div>
				<div>Activity 4</div>
				<div>Activity 5</div>
				<div>Activity 6</div>
				<div>Activity 7</div>
				<div>Activity 8</div>
			</div>
		</div>
	)

}