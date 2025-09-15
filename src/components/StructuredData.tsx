import { SchemaOrgData } from '../types/schema';
import { JSX } from 'react';

interface StructuredDataProps {
  data: SchemaOrgData;
}

export default function StructuredData({ data }: StructuredDataProps): JSX.Element {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  );
}