import React from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const AuthMain = () => {
	return (
		<div className="login-register-area pt-100px pb-100px">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-12 ml-auto mr-auto">
						<div className="login-register-wrapper">
							<div className="login-register-tab-list nav">
								<a className="active" data-bs-toggle="tab" href="#lg1">
									<h4>login</h4>
								</a>
								<a data-bs-toggle="tab" href="#lg2">
									<h4>register</h4>
								</a>
							</div>
							<div className="tab-content">
								<div id="lg1" className="tab-pane active">
									<LoginForm />
								</div>
								<div id="lg2" className="tab-pane">
									<RegisterForm />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
