import { fetchData, fetchData2 } from './fetchData';

// 回调类型异步函数的测试
test('fetchData 结果返回为 { success: true }', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true
    })
    done()
  })
})

// test('fetchData2 结果返回为 { success: true }', () => {
//   return fetchData2().then((res) => {
//     expect(res.data).toEqual({
//       success: true
//     })
//   })
// })

// test('fetchData2 结果返回为 404', () => {
//   expect.assertions(1); // expect 至少执行一次，才能通过测试
//   return fetchData2().catch(e => {
//     console.log(e.toString())
//     expect(e.toString().indexOf('404') > -1).toBe(true)
//   })
// })

// test('fetchData2 resolves', () => {
//   return expect(fetchData2()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

// test('fetchData2 rejects', () => {
//   return expect(fetchData2()).rejects.toThrow()
// })

// async await
test('fetchData2 resolves', async () => {
  await expect(fetchData2()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})

test('fetchData2 rejects', async () => {
  await expect(fetchData2()).rejects.toThrow()
})
// test('fetchData2 async await', async () => {
//   const response = await fetchData2();
//   expect(response.data).toEqual({
//     success: true
//   })
// })

// test('fetchData2 async await', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData2();
//   } catch (e) {
//     expect(e.toString()).toEqual('Error: Request failed with status code 404');
//   }
// })