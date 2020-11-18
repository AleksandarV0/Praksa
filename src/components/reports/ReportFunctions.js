import React from 'react';

import ReportTotalWorkTime from './ReportTotalWorkTime';
import ReportPrint from './ReportPrint';
import ReportCreatePDF from './ReportCreatePDF';
import ReportExportToExcel from './ReportExportToExcel';

function ReportFunctions() {
	return (
		<>
			<ReportTotalWorkTime />
			<div className='grey-box-wrap reports'>
				<div className='btns-inner'>
					<ReportPrint />
					<ReportCreatePDF />
					<ReportExportToExcel />
				</div>
			</div>
		</>
	);
}

export default ReportFunctions;
