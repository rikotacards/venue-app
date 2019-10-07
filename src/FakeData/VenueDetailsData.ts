interface venueDetailsDataType {
    [key: string ]: Record<string,string|number>
}

export const venueDetailsData: venueDetailsDataType = {
    'hotel_1': {
        venueName: 'hotel 1', 
        address: 'central', 
        capacitySitting: '100', 
        area: 4000,
        phone: 65434563,
        email: 'venue@gmail.com',
        capacityStanding: '200', 
        perHeadBudget: 300,
        description: 'This is a small venue but a cozy one that lets you do this and that and it\'s a perfect place to have fun. With 3000 people'
    }
}