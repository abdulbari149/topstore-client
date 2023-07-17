import React from "react";
import { Link } from "react-router-dom";

export const BreadCrumb: React.FC<{ title: string; imageUrl?: string }> = ({ title, imageUrl }) => {
	return (
		<div className="breadcrumb-area" style={{ backgroundImage: imageUrl }}>
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-12 text-center">
						<h2 className="breadcrumb-title">{title}</h2>
						<ul className="breadcrumb-list">
							<li className="breadcrumb-item">
								<Link to={"/"}>Home</Link>
							</li>
							<li className="breadcrumb-item active">{title}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
