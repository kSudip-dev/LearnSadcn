import { Skeleton } from "./ui/skeleton";


function TopJobOpening() {
  return (
    <Skeleton className="w-[384px] h-[301px] pt-[32px] pb-[32px] pl-[26px] pr-[26px]">
        <div className="top flex justify-between">
            <div className="left flex gap-[8px]">
            <Skeleton className="h-[22px] w-[88px]"/>
            <Skeleton className="h-[22px] w-[74px]"/>
            <Skeleton className="h-[22px] w-[86px]"/>
            </div>
            <Skeleton className="h-[35px] w-[33px]"/>
        </div>
        <div className="company flex gap-[13px]">
            <Skeleton className="w-[51px] h-[51px] rounded-[51px]" />
            <div className="companyDetails flex flex-col gap-[2px]">
            <Skeleton className="w-[150px] h-[24px] " />
            <Skeleton className="w-[120px] h-[20px] " />
            </div>
        </div>
        <div className="jobtitle my-[22px] flex flex-col gap-[14px]">
            <Skeleton className="w-[247px] h-[24px]"/>
            <div className="salary w-[247px] h-[50px]
            flex justify-between">
                <Skeleton className="salary w-[89px] h-[48px]"/>
                <Skeleton className="salary w-[89px] h-[48px]"/>
            </div>
        </div>
        <div className="footer flex justify-between">
            <Skeleton className="w-[124px] h-[20px]"/>
            <Skeleton className="w-[46px] h-[44px] rounded-[32px] relative top-[-15px]"/>
        </div>
    </Skeleton>
  )
}

export default TopJobOpening
