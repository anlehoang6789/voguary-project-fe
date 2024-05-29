import { Tag } from 'antd';
import { useState } from 'react';

export default function ManageSelectedFilter() {
  const tags = ['Áo', 'Đỏ', '500,000', 'S'];
  const [selectedFilter, setSelectedFilter] = useState<string[]>(tags);

  const handleClose = (removedTag: string) => {
    const newTags = selectedFilter.filter((tag) => tag !== removedTag);
    setSelectedFilter(newTags);
  };

  const forMap = (tag: string) => (
    <span key={tag} style={{ display: 'inline-block', marginRight: '8px', marginBottom: '8px' }}>
      <Tag closable onClose={() => handleClose(tag)} style={{ fontSize: '16px', padding: '8px 12px' }}>
        {tag}
      </Tag>
    </span>
  );

  const tagChild = tags.map(forMap);

  return <div style={{ marginBottom: 16 }}>{tagChild}</div>;
}
