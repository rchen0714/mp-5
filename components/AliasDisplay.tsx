"use client";

import { useState } from 'react';
import NewAliasForm from '@/components/NewAliasForm';
import { AliasProp } from '@/types/types';
import AliasPreview from '@/components/PreviewAlias';

export default function AliasDisplay({ inputAliases }: { inputAliases: AliasProp[] }) {
    const [aliases, setAliases] = useState(inputAliases);

    return (
        <div>
            <NewAliasForm
                appendAction={(newAlias: AliasProp) => setAliases([...aliases, newAlias])}
            />
            {aliases.map((entry) => (
                <AliasPreview key={entry.alias} aliasEntry={entry} />
            ))}
        </div>
    );
}
