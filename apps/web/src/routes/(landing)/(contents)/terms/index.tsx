import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../../../configs/seo';

export default component$(() => {
  return (
    <Box align="top" height="full" paddingY="5">
      <Box align="top" paddingBottom="3">
        <Text variant="hero" theme="gradient" weight="bold" paddingY="1">
          Terms of Service
        </Text>
        <Text variant="h3" theme="secondary" weight="bold">
          ข้อกำหนดและเงื่อนไขในการใช้บริการ
        </Text>
      </Box>
      <Box variant="secondary" gap="1" width="half" align="left" padding="3" rounded="xl">
        <Text weight="semibold" variant="h3" theme="primary" paddingTop="1">
          คุณสมบัติของผู้ใช้งาน
        </Text>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;ไม่สมัครสมาชิกโดยใช้ในนามของผู้อื่นในการยืนยันตัวตน</Text>

        <Text weight="semibold" variant="h3" theme="primary" paddingTop="1">
          การสมัครสมาชิก
        </Text>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'nunber' }}>&nbsp;&nbsp;การสมัครสมาชิกเพื่อเพิ่มระกับการใช้งานรายเดือน ทางเราจะตัดยอดเงินทุก ๆ วันที่ 2 ของแต่ละเดือน เป็นการต่ออายุอัตโนมัติ หากผู้ใช้งานไม่มีการเตรียมเงินในช่องทางที่เลือกไว้เพียงพอ เครดิตการใช้งานที่คงเหลือยังสามารถใช้ได้จนหมดเครดิตการใช้งาน เป็นเครดิตสะสม</li>
        <li style={{ paddingLeft: '20px', 'list-style-type': 'nunber' }}>&nbsp;&nbsp;หากต้องการยกเลิกการสมัครสมาชิก ต้องกดยกเลิกการสมัครก่อนการตัดยอดของเดือนนั้น ๆ อย่างน้อย 3 วัน และเมื่อกดยกเลิกยังสามารถใช้ยอดเครดิตได้จนถึงวันที่ 1 ของเดือนถัดไป </li>
      </Box>
    </Box>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Terms of Service' });
