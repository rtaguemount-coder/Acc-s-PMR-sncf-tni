export interface SourceItem {
  id: number;
  title: string;
  author: string;
  date: string;
  url: string;
  notes?: string;
}

export interface PipelineStep {
  step: number;
  zoneId: 'phone' | 'cloud' | 'edge';
  zoneLabel: string;
  title: string;
  dataDescription: string;
  goal: string;
  isSensitive?: boolean;
  annotation?: string;
  details: string;
}

export interface FactMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ExistingBrick {
  title: string;
  description: string;
  sourceTag: string;
}

export interface DataCategoryRow {
  name: string;
  location: ('Cloud' | 'Edge' | 'Cloud sécurisé')[];
  purpose: string;
  isSensitive?: boolean;
}

export interface SimulationProfile {
  id: string;
  name: string;
  handicapType: string;
  train: string;
  origin: string;
  destination: string;
  arrivalPlatform: string;
  carriage: string;
  specificNeed: string;
  estimatedArrival: string;
}
