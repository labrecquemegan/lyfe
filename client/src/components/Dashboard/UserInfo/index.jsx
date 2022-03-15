import './userinfo.scss';
import { AiFillCheckCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default function UserInfo({ user }) {
	console.log(user);
	return (
		<section className="userinfo-container">
			<div className="row">
                <h2>Your User Settings</h2>
                <div className="user-profile">
                    
                </div>
			</div>
		</section>
	);
}
