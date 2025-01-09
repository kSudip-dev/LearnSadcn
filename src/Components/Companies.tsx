import { Skeleton } from "./ui/skeleton"


function Companies() {
  return (
    <Skeleton className="w-[280px] h-[276px] rounded-[30px] p-[24px]">
      <div className="header flex justify-between items-center">
        <Skeleton className="w-[48px] h-[48px] rounded-full"/>
        <Skeleton className="w-[38px] h-[28px] rounded-full"/>
      </div>
      <div className="company flex flex-col gap-[2px] mt-[15px]">
        <Skeleton className="w-[173px] h-[24px] "/>
        <Skeleton className="w-[93px] h-[16px] "/>
      </div>
        <Skeleton className="w-[215px] h-[24px] mt-[20px] mb-[20px] "/>

<div className="footer w-[230px] h-[32px] flex justify-between items-center">
    <Skeleton className="w-[94px] h-[32px]"/>
    <Skeleton className="w-[32px] h-[32px] rounded-full"/>
</div>
    </Skeleton>
  )
}

export default Companies
