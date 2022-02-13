// すべてのブログ記事を返すページ

// getは予約語で、/api/posts.jsonにGETアクセスすることで発火するメソッド
// エンドポイントファイルはHTTP verbをexport functionしなければならない
// statusとbodyを返す
export const get = async () => {
  // get data from markdown files
  // import.meta.glob is a Vite function. It imports any files that match the glob(wildcard string) provided
  // /blog/*.md ファイルをすべて取得している
	const allPostFiles = import.meta.glob('../blog/*.md');

	const iterablePostFiles = Object.entries(allPostFiles);

  // metaとpathキーを持ったオブジェクトを返している
  // 上記で取得したデータを整形している
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();

      // pathの最初のドット2つと、最後の3文字(.md)を削除してpathを返す
			const postPath = path.slice(2, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

  // 日付が新しい順にソート
	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

  // SvelteKitがオブジェクトをJSONに変換する
	return {
		body: sortedPosts
	};
};
