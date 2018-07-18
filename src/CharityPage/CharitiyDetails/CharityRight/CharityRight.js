import React from 'react';
import CharityCause from './CharityCause';
import CharityDetailsTable from './CharityDetailsTable';
import LastUpdated from './LastUpdated';

const charityRight = () => {
return (
<div className="container">  
   <LastUpdated />
   <CharityDetailsTable />
</div>
)


};

export default charityRight;