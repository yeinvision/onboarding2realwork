import { marked } from 'marked';
import hljs from 'highlight.js';

// highlight.js 설정
const renderer = {
  code(this: any, { text, lang }: { text: string; lang?: string }) {
    if (lang && hljs.getLanguage(lang)) {
      const highlighted = hljs.highlight(text, { language: lang, ignoreIllegals: true }).value;
      return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
    }
    return `<pre><code>${hljs.highlightAuto(text).value}</code></pre>`;
  }
};

marked.use({ renderer });

// 한글 굵게 처리: 표준 마크다운은 `**워크숍(Workshop)**을`처럼
// 닫는 ** 앞이 문장부호이고 뒤에 한글 조사가 붙으면 굵게로 인식하지 못한다.
// 같은 줄 안의 **...** 를 항상 굵게 처리하도록 보완한다.
marked.use({
  extensions: [
    {
      name: 'cjkStrong',
      level: 'inline',
      start(src: string) {
        const i = src.indexOf('**');
        return i < 0 ? undefined : i;
      },
      tokenizer(this: any, src: string) {
        const match = /^\*\*(?=\S)([^\n]*?\S)\*\*(?!\*)/.exec(src);
        if (match) {
          return {
            type: 'cjkStrong',
            raw: match[0],
            tokens: this.lexer.inlineTokens(match[1]),
          };
        }
        return undefined;
      },
      renderer(this: any, token: any) {
        return `<strong>${this.parser.parseInline(token.tokens)}</strong>`;
      },
    },
  ],
});

export async function renderMarkdown(content: string): Promise<string> {
  try {
    const html = await marked(content);
    return html as string;
  } catch (error) {
    console.error('마크다운 렌더링 오류:', error);
    return '<p>콘텐츠를 로드할 수 없습니다.</p>';
  }
}
