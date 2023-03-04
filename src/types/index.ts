export type navArrType ={
    id:number
    title:string
    path:string
}
export type blogArr={
    id:number
    title:string
    date:string
    content:string
    img:{
        src:string
    }
}

export type breadcrumboneArrType={
     id:number
     title:string
     content:string
     btn:string
     img:{
        src:string
    }
}




export type cardArrType={
    id:number
    title:string
    btn:string
    img:{
       src:string
   }
}


export type sliderArr={
    id:number
    title:string
    content:string
    img:{
        src:string
    }
    video:string
    
}

export type cardArrHome={
    id:number
    img:imgObj[]
    mt:string
}
export type imgObj={
    img1:{
        src:string
    }
    id:number
}

export type homeGalleryArrType={
    id:number
    img:{
        src:string
    }
}

export type eventBreadcrumbArrType={
    id:number
    img:{
        src:string
    }
}
export type eventGalleryArrType={
    id:number
    title:string
    img:{
        src:string
    }
}