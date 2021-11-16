export const OtherRarityTools = ()=>{
    return (
        <>
            
        </>
    );
};

const OtherRarityTool = ({
    url,
    name,
}:{
    name: string,
    url: string,
})=>{
    return (
        <>
            <div>
                <a href={url} target='_blank' rel="noreferrer">{name}</a>
            </div>
        </>
    );
};

