import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import './styles.css'

export function ListProfiles({ editProfiles }){
	const history = useHistory()
	const { url } = useRouteMatch()

	const changeEdit = () => {
		if(editProfiles){
			history.push(`${url}/1`)
		}
	}

	return (
		<div className="list-profiles-wrapper">
			<ul className="list-profiles">
				<li className="profile-item">
					<div className="img-profile" onClick={changeEdit}>
						<div className="thumbnail-gradient" />
						<img src="https://via.placeholder.com/150/24f355" />
						{   editProfiles &&
						<span className="edit-icon">
							<i className="fas fa-pen"></i>
						</span>
						}
					</div>
					<h3 className="profile-name title-3">Mauricio Merla</h3>
				</li>
				<li className="profile-item">
					<div className="img-profile" onClick={changeEdit}>
						<div className="thumbnail-gradient" />
						<img src="https://via.placeholder.com/150/24f355" />
						{   editProfiles &&
						<span className="edit-icon">
							<i className="fas fa-pen"></i>
						</span>
						}
					</div>
					<h3 className="profile-name title-3">Adrian Padilla</h3>
				</li>
				<li className="profile-item">
					<div className="img-profile" onClick={changeEdit}>
						<div className="thumbnail-gradient" />
						<img src="https://via.placeholder.com/150/24f355" />
						{   editProfiles &&
						<span className="edit-icon">
							<i className="fas fa-pen"></i>
						</span>
						}
					</div>
					<h3 className="profile-name title-3">Larisa Chávez</h3>
				</li>
				<li className="profile-item">
					<div className="img-profile" onClick={changeEdit}>
						<div className="thumbnail-gradient" />
						<img src="https://via.placeholder.com/150/24f355" />
						{   editProfiles &&
						<span className="edit-icon">
							<i className="fas fa-pen"></i>
						</span>
						}
					</div>
					<h3 className="profile-name title-3">Karla Lauria</h3>
				</li>
				{   editProfiles &&
				<li className="profile-item">
					<div className="img-profile add-profile">
						<i className="fal fa-plus"></i>
					</div>
					<h3 className="profile-name title-3">Añadir perfil</h3>
				</li>
				}
			</ul>
		</div>
	)
}