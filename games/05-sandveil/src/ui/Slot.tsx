import type { Slot as SlotT } from '../game/inventory';
import { ITEMS } from '../game/data/items';
import { icon } from './iconCache';

export function Slot({
  slot,
  index,
  selected,
  pending,
  small,
  onClick,
  onContext,
}: {
  slot: SlotT | null;
  index?: number;
  selected?: boolean;
  pending?: boolean;
  small?: boolean;
  onClick?: () => void;
  onContext?: () => void;
}) {
  const def = slot ? ITEMS[slot.item] : null;
  const tip = def ? `${def.name}${slot && slot.count > 1 ? ` ×${slot.count}` : ''}\n${def.desc}` : 'Empty';
  return (
    <div
      className={'slot' + (selected ? ' sel' : '') + (pending ? ' pend' : '') + (small ? ' small' : '')}
      title={tip}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        onContext?.();
      }}
    >
      {slot && (
        <>
          <img src={icon(slot.item)} alt={def?.name ?? slot.item} draggable={false} />
          {slot.count > 1 && <span className="cnt">{slot.count}</span>}
        </>
      )}
      {index !== undefined && index < 10 && <span className="num">{(index + 1) % 10}</span>}
    </div>
  );
}
