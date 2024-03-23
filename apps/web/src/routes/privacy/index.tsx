import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../configs/seo';
import { Navigation } from '@producktivity/web-landing-navigation';
import { Footer } from '@producktivity/web-landing-footer';

export default component$(() => {
  return (
    <Box align="center" height="auto">
      <Navigation />
      <Text variant="hero" theme="gradient" weight="bold" paddingY="1">
        Privacy Policy
      </Text>
      <Box gap="1" width="half" align="left">
        <li>เรารวบรวมข้อมูลเกี่ยวกับกิจกรรมของคุณในบริการของเราเพื่อติดต่อสอบถามข้อมูล การบริการ / ตรวจสอบรายละเอียดการสั่งซื้อสินค้า/จัดทำรายการสั่งซื้อ</li>
        <li>ทางเราได้จัดทำประกาศนโยบายความเป็นส่วนตัวนี้เพื่อแจ้งให้ทราบถึงนโยบายความเป็นส่วนตัว รายละเอียดการรวบรวมข้อมูล เพื่อการเปิดเผย วิเคราะห์ผลทางธุรกิจ และอื่น ๆ ตามพระราชบัญญัติ คุมครองข้อมูลส่วนบุคคล พ.ศ. 2562 หรือก็คือ PDPA เพราะทางเราตระหนักถึงความสำคัญ</li>
        <li>ข้อมูลส่วนบุคคลที่เก็บรวบรวม</li>

        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>ช่องทางการติดต่อ</li>
        <li style={{ paddingLeft: '40px', 'list-style-type': 'square' }}>อีเมล</li>
        <li style={{ paddingLeft: '40px', 'list-style-type': 'square' }}>หมายเลขโทรศัพท์</li>

        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>รายละเอียดการชำระเงิน</li>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>ข้อความที่คุณค้นหา</li>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>บุคคลที่ผู้ใช้งานแชร์เนื้อหาด้วย</li>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>รูปภาพ</li>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>IP address</li>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>cookie</li>

        <li>การปกป้องข้อมูลส่วนบุคคล</li>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>มาตรการรักษาความปลอดภัยทางอิเล็กทรอนิกส์บนมาตรฐาน SSL ซึ่งช่วยลดความเสี่ยงในการถูกเข้าถึงข้อมูลของท่านโดยบุคคลที่ไม่ได้รับอนุญาต</li>

        <li>การเปิดเภยข้อมูลต่อบุคคลภายนอก</li>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>ข้อมูลที่มีผลต่อการดำเนินธุรกิจ เรามีความจำเป็นต้องเปิดเผยข้อมูลส่วนบุคคลให้บุคคลที่สาม ตัวอย่างข้อมูลเช่น เพื่อการคิดโปรโมชั่น ทั้งนี้ทางเราขอรับรองว่า จะไม่นำข้อมูลส่วนบุคคลที่ทางเราได้เก็บรวบรวมไปเผยแพร่ในที่สาธารณะ หรือทำการขายข้อมูลให้กับบุคลที่ไม่เกี่ยวข้องโดยเด็ดขาด ยกเว้นกรณีที่มีผลทางกฏหมาย</li>

        <li>ระยะเวลาการเก็บรักษาข้อมูลส่วนบุคคล</li>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>ทางเราจะเก็บรักษาข้อมูลส่วนบุคคลของผู้ใช้งานไว้ตามเท่าที่กำหนดสำหรับวัตถุประสงค์ของการเก็บข้อมูล และทางเราจะลบข้อมูลส่วนบุคคลเมื่อเห็นว่าข้อมูลนั้นไม่ตรงตามวัตถุประสงค์ และจะลบข้อมูลที่ไม่จำเป็นต่อการให้บริการโดยทันทีหลังจากที่ไม่ได้ใช้งาน</li>

        <li>การใช้คุกกี้</li>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>ทางเราจะใช้นโยบายที่สอดคล้องกับการเปลี่ยนแปลงของบริการ ดำเนินงานภายใต้กฏหมาย โดยทางเราจะเปิดเผยนโยบายการให้ผู้ใช้งานทราบผ่านเว็บไซต์ อย่างชัดเจนเมื่อมีการเยี่ยมชมเว็บไซต์ โปรดอ่านนโยบายการคุ้มครองข้อมูลส่วนบุคคลทุกครั้งเพื่อผลประโยชน์ของผู้ใช้งาน โดยที่ผู้ใช้งานสามารถตั้งค่าการเข้าถึงข้อมูลได้</li>

        <li>วิธีการติดต่อ</li>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>หากมีคำถาม ข้อเสนอแนะ หรือต้องการรายละเอียดเพิ่มเติมเกี่ยวกับ ประกาศ นโยบายความเป็นส่วนตัว หรือต้องการติดต่อเรื่องการใช้สิทธิ์ของคุณ โปรดติดต่อ xxx-xxx-xxxx</li>

        <li>การยกเลิกความยินยอม</li>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'circle' }}>ผู้ใช้งานสามารถเลือกยกเลิกความยินยอมในการใช้ข้อมูลส่วนบุคคลของท่านได้ตลอดเวลา โดยติดต่อเราทางอีเมลหรือตามช่องทางการติดต่อที่ระบุไว้ในเว็บไซต์ของเรา</li>
      </Box>
      <Footer />
    </Box>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Privacy Policy' });
