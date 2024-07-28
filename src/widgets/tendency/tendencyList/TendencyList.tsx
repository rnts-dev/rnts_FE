import './tendencyList.scss';
import rabbitIllust from '@/assets/rabbit_illust.png';
import turtleIllust from '@/assets/turtle_illust 1.png';
import { TendencyBtn } from '@/components/tendency';

interface TendencyListProps {
  select: string;
  setSelect: (state: string) => void;
}

export const TendencyList = ({ select, setSelect }: TendencyListProps) => {
  return (
    <div className="tendency_list_container">
      <TendencyBtn
        id="ealry"
        title="출발했어?"
        illust={rabbitIllust}
        description="먼저 도착해서 물어보는 일찍이"
        select={select}
        onClick={() => {
          setSelect('ealry');
        }}
      />
      <TendencyBtn id="late" title="출발했어!" illust={turtleIllust} description="지금 나가면서 대답하는 지각이" select={select} onClick={() => setSelect('late')} />
    </div>
  );
};
