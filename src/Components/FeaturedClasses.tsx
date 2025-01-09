import { Skeleton } from "./ui/skeleton";


function FeaturedClasses() {
  return (
    <Skeleton className="w-[1217px] h-[301px] flex gap-[64px] items-center">
        <Skeleton className="w-[450px] h-[300px]"/>
        <div className="content m-[24px] flex flex-col gap-[24px]">
            <div className="top w-[652px] flex justify-between">
                <div className="leftContent h-[22px] gap-[16px]  flex">
                    <Skeleton className="w-[133px] h-[22px] rounded-[32px]"/>
                
                    <Skeleton className="w-[133px] h-[22px] rounded-[32px]"/>
                </div>
                    

            </div>
            <Skeleton className="w-[255px] h-[24px]"/>
            <Skeleton className="w-[652px] h-[48px]"/>
            <div className="footer flex justify-between items-center">
            <Skeleton className="w-[150px] h-[25px]"/>
            <Skeleton className="w-[150px] h-[25px]"/>
            <Skeleton className="w-[126px] h-[50px] rounded-[29px]"/>

            </div>
        </div>
    </Skeleton>
  )
}

export default FeaturedClasses
