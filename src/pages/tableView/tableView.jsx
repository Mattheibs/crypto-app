import React, { useState, useMemo, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "./tableView.scss";

function TableView({ tableData }) {
	const contactsGridRef = useRef();
	// Column Definitions: Defines the columns to be displayed.
	const pagination = true;
	const paginationPageSize = 15;
	const paginationPageSizeSelector = [15, 20, 50, 100];

	const exportContactsReport = (params) => {
		contactsGridRef.current.api?.exportDataAsCsv(params);
	};

	function currencyFormatter(params) {
		return "$" + formatNumber(params.value);
	}

	function formatNumber(number) {
		return Math.floor(number).toLocaleString();
	}

	const addPercentage = (params) => {
		return params.value + "%";
	};

	const [colDefs, setColDefs] = useState([
		{
			field: "rank",
			filter: "agNumberColumnFilter",
		},
		{ field: "name" },
		{
			field: "symbol",
			filterParams: {
				filterOptions: ["contains"],
			},
		},
		{
			field: "price_usd",
			headerName: "Price USD",
			valueFormatter: currencyFormatter,
		},
		{
			field: "percent_change_24h",
			valueFormatter: addPercentage,
			cellClass: (params) => {
				return params.value < 0 ? "positive" : "negative";
			},
			headerName: "Percent Change 24h",
		},
		{
			field: "percent_change_1h",
			valueFormatter: addPercentage,
			cellClass: (params) => {
				return params.value < 0 ? "positive" : "negative";
			},
			headerName: "Percent Change 1h",
		},
		{
			field: "percent_change_7d",
			valueFormatter: addPercentage,
			cellClass: (params) => {
				return params.value < 0 ? "positive" : "negative";
			},
		},
		{
			field: "price_btc",
			headerName: "Price BTC",
		},
	]);

	const defaultColDef = useMemo(() => {
		return {
			filter: true,
			filterParams: {
				buttons: ["apply", "reset"],
				closeOnApply: true,
				filterOptions: [
					"equals",
					"greaterThanOrEqual",
					"lessThanOrEqual",
					"inRange",
				],
				maxNumConditions: 1,
			},
		};
	}, []);

	return (
		<div className="table">
			<div className="table__export">
				<button
					className="sequence-button"
					onClick={exportContactsReport}
				>
					Export CSV
				</button>
			</div>

			<div className="ag-theme-quartz-dark">
				<AgGridReact
					ref={contactsGridRef}
					rowData={tableData}
					columnDefs={colDefs}
					defaultColDef={defaultColDef}
					pagination={pagination}
					paginationPageSize={paginationPageSize}
					paginationPageSizeSelector={false}
				/>
			</div>
		</div>
	);
}

export default TableView;
