import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 — HO Archive",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
        이용약관
      </h1>
      <p className="text-sm text-[var(--text-muted)] mb-12">시행일: 2026년 7월 10일</p>

      <div className="flex flex-col gap-10 text-[var(--text-secondary)] leading-relaxed text-sm">
        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            제1조 (목적)
          </h2>
          <p>
            본 약관은 HO Archive(이하 &ldquo;회사&rdquo;)가 제공하는 웹사이트 및 관련 서비스
            (이하 &ldquo;서비스&rdquo;)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항,
            기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            제2조 (정의)
          </h2>
          <p>
            &ldquo;이용자&rdquo;란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 모든 개인 또는
            법인을 말하며, &ldquo;서비스&rdquo;란 회사가 웹사이트를 통해 제공하는 다큐멘터리, 가상융합
            (VR·AR), 생성형 AI 콘텐츠 제작 관련 정보 제공 및 프로젝트 문의 접수 등 일체의 서비스를
            의미합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            제3조 (약관의 게시와 개정)
          </h2>
          <p>
            회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 웹사이트 초기 화면 또는 연결 화면을 통해
            게시합니다. 회사는 관계 법령을 위배하지 않는 범위에서 약관을 개정할 수 있으며, 개정된 약관은
            적용일자 및 개정사유를 명시하여 적용일자 7일 전부터 웹사이트를 통해 공지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            제4조 (서비스의 제공 및 변경)
          </h2>
          <p>
            회사는 웹사이트를 통해 회사의 프로젝트 사례, 서비스 소개, 문의 접수 기능을 제공합니다.
            회사는 서비스의 내용, 운영상 또는 기술상 필요에 따라 제공하는 서비스의 전부 또는 일부를
            변경할 수 있으며, 이 경우 변경 사유와 내용을 사전에 공지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            제5조 (서비스의 중단)
          </h2>
          <p>
            회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신 두절 등의 사유가 발생한 경우
            서비스 제공을 일시적으로 중단할 수 있으며, 이 경우 회사는 이용자에게 사전에 공지합니다.
            다만, 사전에 공지할 수 없는 부득이한 사유가 있는 경우 사후에 공지할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            제6조 (이용자의 의무)
          </h2>
          <p>
            이용자는 문의 양식 등을 통해 정보를 제공할 때 허위 정보를 기재하지 않아야 하며, 관계 법령과
            본 약관에서 규정하는 사항 및 서비스 이용 안내에서 공지하는 주의사항을 준수해야 합니다. 이용자는
            타인의 명예를 훼손하거나 회사 및 제3자의 지식재산권을 침해하는 행위를 해서는 안 됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            제7조 (저작권의 귀속 및 이용 제한)
          </h2>
          <p>
            웹사이트에 게시된 영상, 이미지, 텍스트 등 콘텐츠에 대한 저작권 및 기타 지식재산권은 회사 또는
            정당한 권리자에게 귀속됩니다. 이용자는 회사의 사전 승낙 없이 서비스를 이용하여 얻은 정보를
            복제, 전송, 출판, 배포, 방송 등의 방법으로 이용하거나 제3자에게 이용하게 해서는 안 됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            제8조 (면책조항)
          </h2>
          <p>
            회사는 천재지변, 전쟁 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는
            서비스 제공에 관한 책임이 면제됩니다. 회사는 이용자가 서비스를 이용하여 기대하는 수익을 얻지
            못하거나 상실한 것에 대하여 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            제9조 (준거법 및 관할법원)
          </h2>
          <p>
            회사와 이용자 간에 발생한 분쟁에 대하여는 대한민국 법을 적용하며, 분쟁으로 인한 소송이 제기될
            경우 민사소송법상의 관할법원에 제기합니다.
          </p>
        </section>

        <p className="text-xs text-[var(--text-muted)] pt-8 border-t border-[var(--border-subtle)]">
          본 문서는 일반적인 이용약관 양식을 바탕으로 작성된 참고용 자료이며, 실제 서비스 운영 형태에 맞춰
          법률 전문가의 검토를 받아 확정하시기를 권장합니다.
        </p>
      </div>
    </div>
  );
}
