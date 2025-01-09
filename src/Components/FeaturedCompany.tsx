import { Skeleton } from "./ui/skeleton"


function FeaturedCompany() {
  return (
    <Skeleton className="w-[334px] h-[194px] rounded-[32px] ">
        <div className="content pt-[28px] pr-[32px] pl-[28px] flex flex-col gap-[15px]">
        <div className="company flex gap-[24px] items-center">
        <Skeleton className="w-[48px] h-[48px] rounded-full "/>
        <div className="details flex flex-col gap-2">
            <Skeleton className="w-[154px] h-[24px]"/>
            <Skeleton className="w-[124px] h-[20px]"/>
        </div>
        </div>
        <Skeleton className="w-[227px] h-[24px]"/>
        <div className="footer flex ">
        <Skeleton className="w-[168px] h-[36px]"/>
        <Skeleton className="w-[46px] h-[44px] rounded-[32px] relative left-[60px] top-[-5px]"/>

        </div>
        </div>
    </Skeleton>
  )
}

export default FeaturedCompany
