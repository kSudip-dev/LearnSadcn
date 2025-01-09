import { Skeleton } from './ui/skeleton'

function CardSkeleton() {
  return (
    <div>
      <Skeleton className="w-[384px] h-[330px] rounded-[12px] p-[24px] flex flex-col">
        <div className="header flex justify-between">
          {/* Apply rounded-full directly to the logo element */}
          <Skeleton className="w-[48px] h-[48px] rounded-full" />
          <Skeleton className="w-[135px] h-[48px] " />
        </div>
        <div className="content flex flex-col gap-[24px] mt-[24px] mb-[24px]">
            <div className="top w-[307px] h-[52px] flex flex-col gap-[8px]">
        <Skeleton className="w-[214px] h-[24px] " />
        <Skeleton className="w-[307px] h-[20px] " />
 </div>
 <div className="bottom flex flex-col gap-[6px]">
 <Skeleton className="w-[285px] h-[24px] " />
 <Skeleton className="w-[245px] h-[20px] " />
 </div>
        </div>
        <div className="footer flex justify-between mt-[24px]">
        <Skeleton className="w-[100px] h-[24px] " />
        <Skeleton className="w-[32px] h-[32px] " />
        </div>
      </Skeleton>
    </div>
  )
}

export default CardSkeleton;

