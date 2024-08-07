import React, { useState } from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const MealItems = ({ title, description, price, id, onAddFood }) => {
	const [amount, setAmount] = useState(1);

	const onAddAmount = (e) => {
		setAmount(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const tamak = {
			amount,
			id,
			title,
			price,
			description,
		};
		onAddFood(tamak);
	};

	return (
		<List>
			<InfoList>
				<NameFood>{title}</NameFood>
				<InfoFood>{description}</InfoFood>
				<PriceTitle>{price}</PriceTitle>
			</InfoList>
			<MealItemForm
				onChangeAmount={onAddAmount}
				onSubmit={onSubmit}
				id={id}
				price={price}
				title={title}
			/>
		</List>
	);
};

export default MealItems;

const List = styled.li`
	list-style: none;
	border-bottom: 1px solid #d6d6d6;
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	:last-child {
		border: none;
		margin-bottom: 0;
	}
`;

const InfoList = styled.div`
	margin-bottom: 20px;
`;

const NameFood = styled.h4`
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	color: #222222;
	margin: 0;
`;
const InfoFood = styled.p`
	font-style: italic;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #222222;
	margin-top: 4px;
`;
const PriceTitle = styled.span`
	font-weight: 700;
	font-size: 20px;
	line-height: 30px;
	color: #ad5502;
	margin-top: 4px;
`;
