import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 — Ground HO",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
        개인정보처리방침
      </h1>
      <p className="text-sm text-[var(--text-muted)] mb-12">시행일: 2026년 7월 10일</p>

      <div className="flex flex-col gap-10 text-[var(--text-secondary)] leading-relaxed text-sm">
        <section>
          <p>
            Ground HO(이하 &ldquo;회사&rdquo;)는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등
            관련 법령을 준수하고 있습니다. 회사는 본 개인정보처리방침을 통해 이용자가 제공하는 개인정보가
            어떠한 목적과 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지
            안내드립니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            1. 수집하는 개인정보 항목 및 수집 방법
          </h2>
          <p className="mb-2">
            회사는 홈페이지 내 프로젝트 문의(Contact) 양식을 통해 아래와 같은 개인정보를 수집합니다.
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>필수 항목: 이름, 이메일 주소, 문의 내용</li>
            <li>선택 항목: 소속 기관/기업명, 프로젝트 종류, 예산 범위</li>
          </ul>
          <p className="mt-2">
            개인정보는 이용자가 문의 양식을 작성하여 제출하는 과정에서 수집됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            2. 개인정보의 수집 및 이용 목적
          </h2>
          <p>
            수집한 개인정보는 프로젝트 문의에 대한 상담 및 답변, 견적 안내, 계약 체결 및 이행,
            서비스 관련 공지사항 전달 목적으로만 이용되며, 명시한 목적 외의 용도로는 사용되지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            3. 개인정보의 보유 및 이용 기간
          </h2>
          <p>
            회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
            다만, 문의 및 상담 이력은 원활한 사후 응대를 위해 문의일로부터 1년간 보관 후 파기하며,
            관계 법령에 따라 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            4. 개인정보의 제3자 제공
          </h2>
          <p>
            회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 이용자의 사전 동의가
            있거나 법령의 규정에 의거한 경우에는 예외로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            5. 개인정보처리 위탁
          </h2>
          <p>
            회사는 서비스 운영을 위해 필요한 범위 내에서 개인정보 처리 업무의 일부를 외부 업체
            (예: 이메일 발송, 웹사이트 호스팅 등)에 위탁할 수 있으며, 위탁 시 관계 법령에 따라 필요한
            사항을 규정하고 개인정보가 안전하게 관리되도록 필요한 조치를 취합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            6. 정보주체의 권리·의무 및 행사 방법
          </h2>
          <p>
            이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있으며,
            하단에 기재된 개인정보 보호책임자에게 서면, 이메일 등을 통해 연락하시면 지체 없이 조치하겠습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            7. 개인정보의 파기 절차 및 방법
          </h2>
          <p>
            회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는
            지체 없이 해당 개인정보를 파기합니다. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수
            없는 기술적 방법을 사용하여 삭제하며, 종이 문서에 기록·저장된 개인정보는 분쇄하거나 소각하여
            파기합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            8. 개인정보 보호책임자
          </h2>
          <p>
            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만
            처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1 mt-2">
            <li>담당 부서: Ground HO 운영팀</li>
            <li>연락처: snowypaper70@gmail.com</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            9. 고지의 의무
          </h2>
          <p>
            현 개인정보처리방침 내용은 법령, 정책 또는 서비스 변경에 따라 추가, 삭제 및 수정이 있을 시에는
            개정 최소 7일 전부터 홈페이지를 통해 고지할 것입니다.
          </p>
        </section>

        <p className="text-xs text-[var(--text-muted)] pt-8 border-t border-[var(--border-subtle)]">
          본 문서는 일반적인 개인정보처리방침 양식을 바탕으로 작성된 참고용 자료이며, 실제 서비스 운영
          환경과 수집 항목에 맞춰 법률 전문가의 검토를 받아 확정하시기를 권장합니다.
        </p>
      </div>
    </div>
  );
}
