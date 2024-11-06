import { SendIcon } from 'lucide-react';
import Image from 'next/image';
import { Input } from '~/components/ui/input';
import { useFocusWithin } from 'ahooks';
import { useRef } from 'react';
import { cn } from '~/lib/utils';
type ChatViewProps = {};

const ChatView: React.FC<ChatViewProps> = () => {
  const ref = useRef(null);
  const isFocusWithin = useFocusWithin(ref, {
    onFocus: () => {},
    onBlur: () => {}
  });

  return (
    <div className="relative">
      <div
        className={cn(
          'absolute bottom-[40px] h-[200px] w-full bg-[#0C1F44B3] transition',
          isFocusWithin ? 'block' : 'hidden'
        )}
      >
        <div className="w-full border-b-[1px] border-gray-200 px-4 py-3 font-bold">
          LIVE CHAT
        </div>
        <div className="p-2">
          {[
            {
              id: 1,
              name: 'janalleman',
              message: 'i just won upgrader and its not giving me my item',
              avatar: '/images/avatar/avatar-1.png'
            },
            {
              id: 2,
              name: 'NotTerry',
              message: `Did you click off of the pop up? If you did it'll auto sell it for you with +5% and you'll...`,
              avatar: '/images/avatar/avatar-2.png'
            }
          ].map((item) => {
            return (
              <div className="flex flex-row gap-3 p-1" key={item.id}>
                <div className="h-[32px] w-[32px]">
                  <Image
                    src={item.avatar}
                    width={32}
                    height={32}
                    alt="avatar"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="inline-block bg-gradient-to-r from-[#F2ECB6] via-[#A96F44] to-[#F2ECB6] bg-clip-text text-[10px] font-semibold text-transparent">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-[#CDCDCD]">
                    {item.message}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative">
        <Input
          ref={ref}
          className="h-[40px] rounded-none border-0 bg-[#0C1F44D9]"
          placeholder="Alice is Typing......."
        />
        <SendIcon
          size={16}
          className="absolute right-1 top-1/2  -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ChatView;
