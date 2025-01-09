import { Skeleton } from "./ui/skeleton";

function NextSkeleton() {
  return (
    <div>
      <Skeleton className="w-[452px] h-[362px] rounded-[32px] p-[24px] flex flex-col">
        <div className="header flex justify-between">
          <div className="front">
            <div className="tags flex gap-[10px]">
              <Skeleton className="w-[80px] h-[22px] rounded-[24px]" />
              <Skeleton className="w-[80px] h-[22px] rounded-[24px]" />
            </div>
            <div className="company flex flex-col gap-[2px] mt-[24px]">
              <Skeleton className="w-[183px] h-[24px]" />
              <Skeleton className="w-[148px] h-[20px]" />
            </div>
          </div>
          <Skeleton className="w-[51px] h-[51px] rounded-full" />
        </div>
        <div className="content flex flex-col  mt-[24px] mb-[24px]">
          <div className="top w-[307px] h-[52px] flex flex-col gap-[8px]">
            <Skeleton className="w-[238px] h-[24px] " />
          </div>
          <div className="bottom flex  gap-[6px] w-[239px] h-[50px]">
            <Skeleton className="w-[89px] h-[48px] " />
            {/* <div className="vertical-line w-[2px] h-[40px] bg-[#333]"></div> */}
            <Skeleton className="w-[90px] h-[48px] " />
          </div>
        </div>
        <div className="footer flex flex-col gap-1">
        <Skeleton className="w-[148px] h-[20px] " />
            <div className="footer-bottom flex justify-between">
          <Skeleton className="w-[164px] h-[44px] rounded-[32px]" />
          <Skeleton className="w-[32px] h-[35px] " />
            </div>
        </div>
      </Skeleton>
    </div>
  );
}

export default NextSkeleton;
