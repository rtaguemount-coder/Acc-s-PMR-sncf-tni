import React, { useState } from 'react';
import { SOURCES_LIST } from '../data/articleData.ts';
import { ExternalLink, Check, Copy } from 'lucide-react';

export const SourcesSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopyCitation = (source: typeof SOURCES_LIST[0]) => {
    const text = `${source.author} (${source.date}). "${source.title}". Disponible sur : ${source.url}`;
    navigator.clipboard.writeText(text);
    setCopiedId(source.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="sources" className="py-12 border-b border-[var(--border)]" aria-labelledby="h-sources">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 id="h-sources" className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mb-1">
              Sources & Références
            </h2>
            <p className="text-sm text-[var(--muted)]">
              17 sources documentaires vérifiées issues des publications officielles SNCF, de la presse technique et d'autorités de régulation.
            </p>
          </div>
        </div>

        <ol className="divide-y divide-[var(--border)] border-y border-[var(--border)] list-decimal pl-6 space-y-4 py-4">
          {SOURCES_LIST.map((source) => (
            <li key={source.id} className="pt-3 first:pt-0 pr-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm text-[var(--ink)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>{source.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 shrink-0" aria-hidden="true" />
                </a>

                <button
                  onClick={() => handleCopyCitation(source)}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--muted)] hover:text-[var(--accent)] shrink-0 self-start sm:self-auto cursor-pointer"
                  title="Copier la référence bibliographique"
                  aria-label={`Copier la citation pour la source ${source.id}`}
                >
                  {copiedId === source.id ? (
                    <>
                      <Check className="w-3 h-3 text-[var(--edge-ink)]" />
                      <span className="text-[var(--edge-ink)]">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Citer</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-[var(--muted)] mt-1 flex flex-wrap items-center gap-2">
                <span className="font-medium text-[var(--ink)]">{source.author}</span>
                <span aria-hidden="true">·</span>
                <span>{source.date}</span>
                {source.notes && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="italic">{source.notes}</span>
                  </>
                )}
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-4 text-xs text-[var(--muted)] italic">
          Note méthodologique : Certaines sources officielles de la SNCF n'indiquent pas de date précise de publication : elles sont alors signalées par la mention « Date non indiquée ». Les chiffres de 2016 issus de l'AFP sont à actualiser avant tout usage opérationnel définitif.
        </p>
      </div>
    </section>
  );
};
