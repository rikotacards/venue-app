import React from 'react'; 
import { ColumnLayout } from './ColumnLayout';

interface AmenitiesContainerProps {
    enableColumnLayout?: boolean;
}


export const AmenitiesContainer: React.FunctionComponent<AmenitiesContainerProps> = (props) => {
    const { enableColumnLayout } = props; 
    return (
        <>
        {enableColumnLayout && <ColumnLayout/>}
        </>
    )
}