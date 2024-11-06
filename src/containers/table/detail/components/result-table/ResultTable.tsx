import { Skeleton } from '~/components/ui/skeleton';
import { cn } from '~/lib/utils';
import { ResultRound } from '~/types/result';
import { isEmpty } from 'lodash';
import { findMaxCard, getDataResultRound, getIconCard } from '~/utils/common';
import { ItemResultBet } from '~/types/generated';
import { CARD_POINT, CARD_POKER } from '~/constants/card';

type ResultTableProps = {
  loading: boolean;
  results: any[];
};

const RESULT_TABLE = [
  {
    id: '1',
    quantity: ''
  },
  {
    id: '2',
    quantity: ''
  },
  {
    id: '3',
    quantity: ''
  },
  {
    id: '4',
    quantity: ''
  },
  {
    id: '5',
    quantity: ''
  },
  {
    id: '6',
    quantity: ''
  },
  {
    id: '7',
    quantity: ''
  },
  {
    id: '8',
    quantity: ''
  },
  {
    id: '9',
    quantity: ''
  },
  {
    id: '10',
    quantity: ''
  }
];

enum NAME_PLAYER {
  dealer = 'dealer',
  player1 = 'player1',
  player2 = 'player2',
  player3 = 'player3'
}

const NAME_PLAYER_KEY = {
  0: NAME_PLAYER.dealer,
  1: NAME_PLAYER.player1,
  2: NAME_PLAYER.player2,
  3: NAME_PLAYER.player3
};

const BG_COLOR_RESULT = {
  win: 'bg-[#1C3669] text-white',
  lose: 'bg-white text-black'
};

const trVariant = cn('flex flex-row');

const tdVariant = cn(
  'border border-[#CCCCCC] w-[34px] h-[34px] flex justify-center items-center text-black text-[13px]'
);

const ResultTable: React.FC<ResultTableProps> = ({ loading, results }) => {
  const genTextTypeResult = (data: ItemResultBet) => {
    const quality = data?.quality;
    if (!quality) {
      return '';
    }
    switch (quality) {
      case 'niu1': {
        return 'N1';
      }
      case 'niu2': {
        return 'N2';
      }
      case 'niu3': {
        return 'N3';
      }
      case 'niu4': {
        return 'N4';
      }
      case 'niu5': {
        return 'N5';
      }
      case 'niu6': {
        return 'N6';
      }
      case 'niu7': {
        return 'N7';
      }
      case 'niu8': {
        return 'N8';
      }
      case 'niu9': {
        return 'N9';
      }
      case 'niuniu': {
        return 'NN';
      }
      case 'hightCard': {
        const [type, value] = findMaxCard(data?.cards ?? []).split('-');
        return `${getIconCard(type)} ${CARD_POINT[value]}`;
      }
      case '소카드': {
        return 'SMALL & SS';
      }
      case '포카드': {
        return 'FOUR && FF';
      }
      case '올픽쳐': {
        return 'BIG & BB';
      }
    }
  };

  const getColor = (data: ItemResultBet) => {
    if (data?.quality !== 'hightCard' || !data?.quality) {
      return '';
    }

    const [type] = findMaxCard(data?.cards ?? []).split('-');

    return [CARD_POKER.DIAMOND, CARD_POKER.HEART].includes(type as CARD_POKER)
      ? 'text-red-500'
      : '';
  };

  const getBgColorResult = ({
    result,
    player
  }: {
    result: ResultRound;
    player: NAME_PLAYER;
  }) => {
    if (isEmpty(result)) {
      return '';
    }

    const { isDealerWin, isPlayer1Win, isPlayer2Win, isPlayer3Win } =
      getDataResultRound(result);

    switch (player) {
      case NAME_PLAYER.dealer:
        return isDealerWin
          ? 'bg-[#87154C] text-white shadow-lg'
          : BG_COLOR_RESULT.lose;
      case NAME_PLAYER.player1:
        return isPlayer1Win ? BG_COLOR_RESULT.win : BG_COLOR_RESULT.lose;
      case NAME_PLAYER.player2:
        return isPlayer2Win ? BG_COLOR_RESULT.win : BG_COLOR_RESULT.lose;
      case NAME_PLAYER.player3:
        return isPlayer3Win ? BG_COLOR_RESULT.win : BG_COLOR_RESULT.lose;
    }
  };

  return (
    <div className="flex h-full items-center bg-white p-2 shadow-lg">
      <table className="table-auto border border-slate-100">
        <tbody>
          {Array.from({ length: 4 }).map((_, index) => {
            let key = NAME_PLAYER_KEY[index];
            return (
              <tr className={cn(trVariant)} key={index}>
                {[
                  {
                    id: '0',
                    text: index === 0 ? 'B' : `P${index}`
                  },
                  ...(results ?? []).slice().reverse(),
                  ...RESULT_TABLE
                ]
                  .splice(0, 10)
                  .map((item: any) => {
                    const quality = genTextTypeResult(item?.result?.[key]);
                    return loading ? (
                      <td className={cn(tdVariant)} key={item.id}>
                        <Skeleton className={cn(tdVariant)} key={item.id} />
                      </td>
                    ) : (
                      <td
                        className={cn(
                          tdVariant,
                          (item?.result?.[key]?.quality || item.id == 0) &&
                            `bg-[#1C3669] font-semibold text-white`,
                          item.id == 0 && item.text === 'B' && 'bg-[#87154C] ',
                          item.id !== 0 &&
                            getBgColorResult({
                              result: item.result,
                              player: key
                            }),

                          ['소카드', '올픽쳐', '포카드'].includes(
                            item?.result?.[key]?.quality
                          ) && 'text-center text-[9px] leading-tight',
                          getColor(item?.result?.[key])
                        )}
                        key={item.id}
                        dangerouslySetInnerHTML={{
                          __html: item.id == 0 ? item?.text : quality
                        }}
                      ></td>
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
