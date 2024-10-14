import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AcharListData from "./AcharsListData";

function AcharDetails() {
	const { id } = useParams();
	const [achar, setAchar] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const foundAchar = AcharListData.find((item) => item.id === parseInt(id));
		console.log(foundAchar);
		setAchar(foundAchar);
		console.log("AcharDetails mounted with ID:", id);
		console.log(achar);
	}, [id]);

	if (!achar) return <div>Loading...</div>;

	return (
		<>
			{" "}
			<div>
				<h2>{achar.title}</h2>
				<img src={achar.image} alt={achar.alt} width={200} height={200} />
				{/* <p>{achar.description}</p>  */}
				<p>
					Price: {achar.price.current}
					{console.log(achar.image)}
				</p>
			</div>
			<button className="btn" aria-label="Back to List" style={{ marginTop: "12px" }} onClick={() => navigate("/achars")}>
				Back
			</button>
		</>
	);
}

export default AcharDetails;
