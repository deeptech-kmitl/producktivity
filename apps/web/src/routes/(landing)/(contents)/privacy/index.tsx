import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../../../configs/seo';

export default component$(() => {
  return (
    <Box align="center" height="auto" paddingY="5">
      <Box align="center" height="auto" paddingBottom="3">
        <Text variant="hero" theme="gradient" weight="bold" paddingY="1">
          Privacy Policy
        </Text>
        <Text variant="h3" theme="secondary" weight="bold">
          นโยบายคุ้มครองข้อมูลส่วนบุคคล
        </Text>
      </Box>
      <Box variant="secondary" gap="1" width="half" align="left" padding="3" rounded="xl">
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;เรารวบรวมข้อมูลเกี่ยวกับกิจกรรมของคุณในบริการของเราเพื่อติดต่อสอบถามข้อมูล การบริการ / ตรวจสอบรายละเอียดการสั่งซื้อสินค้า/จัดทำรายการสั่งซื้อ</Text>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;ทางเราได้จัดทำประกาศนโยบายความเป็นส่วนตัวนี้เพื่อแจ้งให้ทราบถึงนโยบายความเป็นส่วนตัว รายละเอียดการรวบรวมข้อมูล เพื่อการเปิดเผย วิเคราะห์ผลทางธุรกิจ และอื่น ๆ ตามพระราชบัญญัติ คุมครองข้อมูลส่วนบุคคล พ.ศ. 2562 หรือก็คือ PDPA เพราะทางเราตระหนักถึงความสำคัญ</Text>

        <Text weight="semibold" variant="h3" theme="primary" paddingTop="1">
          ข้อมูลส่วนบุคคลที่เก็บรวบรวม
        </Text>
        <Box paddingLeft="2">
          <li>ช่องทางการติดต่อ</li>
          <li style={{ paddingLeft: '20px', 'list-style-type': 'square' }}>อีเมล หมายเลขโทรศัพท์</li>
          <li>รายละเอียดการชำระเงิน</li>
          <li>ข้อความที่คุณค้นหา</li>
          <li>บุคคลที่ผู้ใช้งานแชร์เนื้อหาด้วย</li>
          <li>รูปภาพ</li>
          <li>IP address</li>
          <li>cookie</li>
        </Box>

        <Text weight="semibold" variant="h3" theme="primary" paddingTop="1">
          การปกป้องข้อมูลส่วนบุคคล
        </Text>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;มาตรการรักษาความปลอดภัยทางอิเล็กทรอนิกส์บนมาตรฐาน SSL ซึ่งช่วยลดความเสี่ยงในการถูกเข้าถึงข้อมูลของท่านโดยบุคคลที่ไม่ได้รับอนุญาต</Text>

        <Text weight="semibold" variant="h3" theme="primary" paddingTop="1">
          การเปิดเภยข้อมูลต่อบุคคลภายนอก
        </Text>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;ข้อมูลที่มีผลต่อการดำเนินธุรกิจ เรามีความจำเป็นต้องเปิดเผยข้อมูลส่วนบุคคลให้บุคคลที่สาม ตัวอย่างข้อมูลเช่น เพื่อการคิดโปรโมชั่น ทั้งนี้ทางเราขอรับรองว่า จะไม่นำข้อมูลส่วนบุคคลที่ทางเราได้เก็บรวบรวมไปเผยแพร่ในที่สาธารณะ หรือทำการขายข้อมูลให้กับบุคลที่ไม่เกี่ยวข้องโดยเด็ดขาด ยกเว้นกรณีที่มีผลทางกฏหมาย</Text>

        <Text weight="semibold" variant="h3" theme="primary" paddingTop="1">
          ระยะเวลาการเก็บรักษาข้อมูลส่วนบุคคล
        </Text>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;ทางเราจะเก็บรักษาข้อมูลส่วนบุคคลของผู้ใช้งานไว้ตามเท่าที่กำหนดสำหรับวัตถุประสงค์ของการเก็บข้อมูล และทางเราจะลบข้อมูลส่วนบุคคลเมื่อเห็นว่าข้อมูลนั้นไม่ตรงตามวัตถุประสงค์ และจะลบข้อมูลที่ไม่จำเป็นต่อการให้บริการโดยทันทีหลังจากที่ไม่ได้ใช้งาน</Text>

        <Text weight="semibold" variant="h3" theme="primary" paddingTop="1">
          การใช้คุกกี้
        </Text>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;ทางเราจะใช้นโยบายที่สอดคล้องกับการเปลี่ยนแปลงของบริการ ดำเนินงานภายใต้กฏหมาย โดยทางเราจะเปิดเผยนโยบายการให้ผู้ใช้งานทราบผ่านเว็บไซต์ อย่างชัดเจนเมื่อมีการเยี่ยมชมเว็บไซต์ โปรดอ่านนโยบายการคุ้มครองข้อมูลส่วนบุคคลทุกครั้งเพื่อผลประโยชน์ของผู้ใช้งาน โดยที่ผู้ใช้งานสามารถตั้งค่าการเข้าถึงข้อมูลได้</Text>

        <Text weight="semibold" variant="h3" theme="primary" paddingTop="1">
          วิธีการติดต่อ
        </Text>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;หากมีคำถาม ข้อเสนอแนะ หรือต้องการรายละเอียดเพิ่มเติมเกี่ยวกับ ประกาศ นโยบายความเป็นส่วนตัว หรือต้องการติดต่อเรื่องการใช้สิทธิ์ของคุณ โปรดติดต่อ xxxx</Text>
        <Text weight="semibold" variant="h3" theme="primary" paddingTop="1">
          การยกเลิกความยินยอม
        </Text>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;ผู้ใช้งานสามารถเลือกยกเลิกความยินยอมในการใช้ข้อมูลส่วนบุคคลของท่านได้ตลอดเวลา โดยติดต่อเราทางอีเมลหรือตามช่องทางการติดต่อที่ระบุไว้ในเว็บไซต์ของเรา</Text>
      </Box>
    </Box>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Privacy Policy' });
