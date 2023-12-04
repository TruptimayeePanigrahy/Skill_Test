export default function Button(content: any) {
  return (
    <div className="px-[54px] py-[12px] text-[24px] text-PiWhiteBackground font-bold bg-PiButton rounded-xl hover:bg-PiGradentto">
      <p className="text-center text-[24px] font-[700] leading-[40px] text-PiWhiteBackground">
        {content.content}
      </p>
    </div>
  );
}
