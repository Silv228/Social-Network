export const followUnfollowFlow = (items, id, followed) => 
    items.map((item) => {
        if (item.id === id){
            return({...item, followed : followed})
        }
        return item
    })
