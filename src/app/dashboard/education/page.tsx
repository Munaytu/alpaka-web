
import React from 'react';
import Introduction from '@/components/bitcoin-guide/Introduction';
import WhatIsBitcoin from '@/components/bitcoin-guide/WhatIsBitcoin';
import HistoryOfBitcoin from '@/components/bitcoin-guide/HistoryOfBitcoin';
import RisksAndSecurity from '@/components/bitcoin-guide/RisksAndSecurity';
import UsesAndPractice from '@/components/bitcoin-guide/UsesAndPractice';
import CultureAndCommunity from '@/components/bitcoin-guide/CultureAndCommunity';

export default function EducationPage() {
  return (
    <div className="space-y-8">
      <Introduction />
      <WhatIsBitcoin />
      <HistoryOfBitcoin />
      <UsesAndPractice />
      <RisksAndSecurity />
      <CultureAndCommunity />
    </div>
  );
}
