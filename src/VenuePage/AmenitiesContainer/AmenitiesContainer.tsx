import React from 'react'; 
import { ColumnLayout } from './ColumnLayout';

interface AmenitiesContainerProps {
    enableColumnLayout?: boolean;
}

// contains either chart or column layout
export const AmenitiesContainer: React.FunctionComponent<AmenitiesContainerProps> = (props) => {
    const { enableColumnLayout } = props; 
    return (
        <>
        {enableColumnLayout && <ColumnLayout/>}
        </>
    )
}